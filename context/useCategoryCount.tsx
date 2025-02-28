const useCategoryCount = (course: any) => {
  const categoryCounts = course.reduce((counts: any, course: { category: number }) => {
    counts[course.category] = (counts[course.category] || 0) + 1;
    return counts;
  }, {});

  return { categoryCounts };
};

export default useCategoryCount;
