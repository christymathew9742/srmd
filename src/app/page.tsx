import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
       Christy main
       <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          width="800"
          height="450"
          src="https://embed.figma.com/proto/qLZ9LkwG4rmx7SgcXiLNeC/SRMD-Homepage?node-id=27-43&scaling=scale-down&content-scaling=fixed&embed-host=share"
          allowFullScreen
        />

      </main>
    </div>
  );
}
