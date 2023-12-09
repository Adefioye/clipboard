import React from "react";
import Image from "next/image";

const SuperChargeWorkFlow = () => {
  const workflows = [
    {
      title: "Create Blacklists",
      description:
        "Easily search your snippets by content, category, web address, application, and more.",
      icon: "/images/icon-blacklist.svg",
    },
    {
      title: "Plain Text Snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
      icon: "/images/icon-text.svg",
    },
    {
      title: "Sneak Preview",
      description:
        "Quick preview of all snippets on your Clipboard for easy access.",
      icon: "/images/icon-preview.svg",
    },
  ];

  return (
    <section
      id="supercharge"
      className="section-container flex flex-col items-center my-10"
    >
      <div className="mb-12">
        <h3>Supercharge your workflow</h3>
        <p className="section-content text-2xl">
          We&apos;ve got the tools to boost your productivity.
        </p>
      </div>
      <div className="flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-20">
        {workflows.map((workflow, i) => (
          <div key={i} className="flex flex-col items-center space-y-5">
            <Image
              height={0}
              width={0}
              alt=""
              src={`${workflow.icon}`}
              className="w-12 h-auto"
            />
            <h5>{workflow.title}</h5>
            <p className="section-content !leading-5 text-xl">{workflow.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuperChargeWorkFlow;
