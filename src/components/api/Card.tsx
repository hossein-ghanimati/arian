/* eslint-disable @typescript-eslint/no-explicit-any */
const Card = (props: any) => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {
            props.title
          }
        </h3>
        <p className="my-4">
          {
            props.explanation
          }
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <img
          className="rounded-full size-9"
          src={props.url}
          alt="profile picture"
        />
      </figcaption>
    </figure>
  );
};

export default Card;
