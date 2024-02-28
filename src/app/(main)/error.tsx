"use client";

const errorList = [
  {
    id: 1,
    title: "Incorrect Country Name",
    description:
      "Please ensure that you've entered the correct country name. Check for any spelling errors or typos.",
  },
  {
    id: 2,
    title: "Inappropriate Path or Search Parameters",
    description:
      "The URL path or search parameters you've entered might not be valid. Please check and try again.",
  },
  {
    id: 3,
    title: "Server Error",
    description:
      "There might be a problem on our end. We apologize for the inconvenience. Please try again later.",
  },
  {
    id: 4,
    title: "Network Issues",
    description: "Please check your internet connection and try again.",
  },
];

function Error() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Oops ! Something went wrong</h1>
      <ul className="mt-8 w-full max-w-4xl">
        {errorList.map((error) => (
          <li key={error.id} className="pt-1">
            <span>{error.id}. </span>
            <span className="font-bold">{error.title}: </span>
            <span className="font-light">{error.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Error;
