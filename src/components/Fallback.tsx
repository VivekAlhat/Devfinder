const Fallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div
      role="alert"
      className="p-8 rounded-xl text-center border border-zinc-500"
    >
      <p>Some error has occured:</p>
      <pre style={{ whiteSpace: "normal" }}>{JSON.stringify(error)}</pre>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-5"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

export default Fallback;
