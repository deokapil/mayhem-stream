import Image from "next/image";

export function VideoTitle({ title, limitHeight, limitSize }) {
  return (
    <h1
      className={`max-w-md font-semibold leading-6 text-gray-100 group-hover:text-gray-200 ${
        limitSize ? "text-base" : "text-lg"
      } ${limitHeight ? "max-h-12 w-full overflow-hidden" : ""}`}
    >
      {title}
    </h1>
  );
}

export function VideoDescription({ description }) {
  return (
    <p className="mt-2 h-5 max-w-md text-2xl leading-6 text-gray-50">
      {description}
    </p>
  );
}

export function UserImage({ image, className = "" }) {
  return (
    <div className={`relative h-10 w-10 ${className}`}>
      <Image
        src={image || "/MM_logo.png"}
        alt=""
        className="absolute rounded-full"
        fill
      />
    </div>
  );
}
