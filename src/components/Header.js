import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-main shadow-lg sticky top-0 z-20 bg-slate-950">
      <div className="container mx-auto py-3 px-2 lg:grid gap-10 justify-between items-center">
        <Image
          className="w-full h-12 object-contain"
          src="/MM_logo1.png"
          height={130}
          width={150}
          alt="Mayhem Logo"
        />
      </div>
    </div>
  );
};

export default Header;
