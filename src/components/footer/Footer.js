export default function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-row gap-16 w-full justify-center p-[50px]">
      <p>Year {currentYear}</p>
      <p> portfolio v2.0</p>
      <a href="https://portfolio-three-silk-95.vercel.app/" target="blank">
        <p>archive available for the v1.0</p>
      </a>
    </footer>
  );
}
