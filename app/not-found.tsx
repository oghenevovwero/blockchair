type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen justify-center px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-3xl text-blue-500 dark:text-blue-400">404 error</p>
          <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Requested page not found
          </h1>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Sorry, no page matched your query
          </p>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            This could be due to a faulty internet connection
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
