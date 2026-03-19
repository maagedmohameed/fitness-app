export default function ImagesSide() {
  return (
    <div className="gap-2 grid grid-cols-2 px-2">
      <img src="/assets/images/image1.webp" alt="image1" className="rounded-2xl w-[18.22rem] h-92 object-cover" />
      <img
        src="/assets/images/image3.webp"
        alt="image3"
        className="self-end mb-5 rounded-2xl w-76 h-[17.8rem] object-cover"
      />
      <img src="/assets/images/image2.webp" alt="image2" className="rounded-2xl w-[18.22rem] h-84 object-cover" />
      <img src="/assets/images/image4.webp" alt="image4" className="-mt-5 rounded-2xl w-76 h-84 object-cover" />
    </div>
  );
}
