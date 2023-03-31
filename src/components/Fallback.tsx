const Fallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div role="alert" className="bg-gray-700 p-8 rounded-xl text-center">
      <p>Some error has occured:</p>
      <pre style={{ whiteSpace: "normal" }}>{JSON.stringify(error)}</pre>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

export default Fallback;
