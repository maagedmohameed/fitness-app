export default function ImagesSide() {
  return (
    <div className="grid grid-cols-2 gap-2 px-0 sm:px-2 w-full">
      <img
        src="/assets/images/image1.webp"
        alt="image1"
        className="rounded-2xl w-full h-56 sm:h-72 lg:h-92 object-cover"
      />
      <img
        src="/assets/images/image3.webp"
        alt="image3"
        className="self-end mb-3 sm:mb-5 rounded-2xl w-full h-48 sm:h-64 lg:h-[17.8rem] object-cover"
      />
      <img
        src="/assets/images/image2.webp"
        alt="image2"
        className="rounded-2xl w-full h-52 sm:h-68 lg:h-84 object-cover"
      />
      <img
        src="/assets/images/image4.webp"
        alt="image4"
        className="-mt-3 sm:-mt-5 rounded-2xl w-full h-52 sm:h-68 lg:h-84 object-cover"
      />
    </div>
  );
}
