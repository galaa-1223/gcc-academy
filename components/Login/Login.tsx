import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { LoginSchema, LoginType } from '@/lib/formValidationSchemas'
// import { loginType } from "@/type/auth";

const Login = () => {

  const router = useRouter();
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({ resolver: zodResolver(LoginSchema) });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {

    try {
      const signInResponse = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if(!signInResponse || signInResponse.ok !== true) {
          // alert("Invalid credentials");
          toast.error('Invalid credentials');
      } else {
          router.refresh();
      }
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      toast.success('Амжилттай нэвтэрлээ');
      router.refresh();
      router.push('/');
    }
  }, [status]);

  return (
    <>
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Login</h3>
          <form className="max-width-auto" onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-group">
              <input
                {...register("email")} 
                name="email"
                placeholder="Email *"
              />
              <span className="focus-border"></span>
              {errors.email && errors.email.message}
            </div>
            <div className="form-group">
              <input
                {...register("password")}
                type="password"
                autoComplete="off"
                placeholder="Password *"
              />
              <span className="focus-border"></span>
              {errors.password && errors.password.message}
            </div>

            <div className="row mb--30">
              <div className="col-lg-6">
                <div className="rbt-checkbox">
                  <input type="checkbox" id="rememberme" name="rememberme" />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-lost-password text-end">
                  <Link className="rbt-btn-link" href="#">
                    Lost your password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Log In</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </>
  );
};

export default Login;
