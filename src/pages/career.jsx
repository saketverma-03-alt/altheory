import Footer from "@/components/footer";
import { Nav } from "@/components/navbar";

export default function CareerPage() {
  return (
    <>
      <Nav activeTabId={"career"} />
      <div className="mt-36  max-w-[1980px] flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl font-semibold">
          Drop your CV and we will get back to you{" "}
        </h1>
        <p className="text-center text-muted max-w-2xl my-16">
          At Altheory, we are dedicated to empowering businesses with
          cutting-edge software solutions tailored to their unique needs. With a
          passion for innovation and a commitment to excellence, we have been a
          trusted partner for organizations of all sizes, helping them
          streamline their operations, boost efficiency, and achieve their
          business goals.
        </p>
        <p className="text-xl">
          Email us your resume at{" "}
          <a
            className="flex gap-2 items-center hover:text-primary"
            href="mailto&#58;hr&#64;altheory&#46;com"
          ></a>
        </p>
      </div>
      <Footer />
    </>
  );
}
