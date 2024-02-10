function NotFoundError(){
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen justify-center px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-3xl text-blue-500 dark:text-blue-400">500 error</p>
          <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Error loading document
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFoundError;
