import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="  max-container mx-auto">
      <div className=" grid grid-cols-1  mx-4 px-3 border-t  border-project-card-border  md:grid-cols-1     items-center gap-y-4  gap-x-12   py-10   flex-wrap overflow-hidden ">
        <div className="text-text-secondary order-2 md:order-1">
          <p className="text-center md:text-right">
            Made by&nbsp;
            <span className="text-text-primary font-medium">
              Soumik Das.&nbsp;
            </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
