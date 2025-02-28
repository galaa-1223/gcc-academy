import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from 'bcrypt'
// import { z } from 'zod'

// const userSchema = z
//   .object({
//     username: z.string().min(1, 'Username is required').max(100),
//     email: z.string().min(1, 'Email is required').email('Invalid email'),
//     password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters')
//   })

export async function POST(req: Request){
  try {
    const body = await req.json();
    const { username, email , password } = body;

    const existingUserByEmail = await db.users.findUnique({
      where: { email: email }
    });

    if(existingUserByEmail) {
      return NextResponse.json({ user: null, message: 'User with this email already exists'}, { status: 409 })
    }

    // const existingUserByUsername = await db.user.findUnique({
    //   where: { username: username }
    // });

    // if(existingUserByUsername) {
    //   return NextResponse.json({ user: null, message: 'User with this username already exists'}, { status: 409 })
    // }

    const hashedPassword = await hash(password, 10)

    const newUser = await db.users.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })


    return NextResponse.json({ user: newUser, message: "User created successful"}, { status: 201});
    // return NextResponse.json({ body });
  } catch(error){
    return NextResponse.json({ message: "Something went wrong!"}, { status: 500});
  }
}

export async function GET(req: NextRequest, res: NextResponse){
  if (req.method === 'GET') {
    try {

      const url = new URL(req.url as string);
      const userId = url.searchParams.get('id');

      if (userId) {
        const user = await db.users.findUnique({
          where: { id: Number(userId) }
        });

        if (!user) {
          return new NextResponse(JSON.stringify({ error: 'User not found' }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }

        return new NextResponse(JSON.stringify(user), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {

        const users = await db.users.findMany();
        return new NextResponse(JSON.stringify(users), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

    } catch(error){
      return NextResponse.json({ message: "Something went wrong!"}, { status: 500});
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  if (req.method === 'DELETE') {
    // const projects = await prisma.projects.findMany();
    const { userId } = JSON.parse(await req.text());

    return new NextResponse(JSON.stringify(userId), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  //   try {
  //     await db.users.delete({
  //       where: { id: userId }
  //     });
  //     return new NextResponse(JSON.stringify({ message: 'User deleted successfully' }), {
  //       status: 200,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //     return new NextResponse(JSON.stringify({ error: 'Error deleting user' }), {
  //       status: 500,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //   }
  // } else {
  //   return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
  //     status: 405,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  if (req.method === 'PUT') {
    try {
      const { id, ...requestData } = await req.json();

      const updatedUser = await db.users.update({
        where: { id: id },
        data: requestData
      });

      return new NextResponse(JSON.stringify(updatedUser), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error updating user:', error);
      return new NextResponse(JSON.stringify({ error: 'Error updating user' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid request method' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
