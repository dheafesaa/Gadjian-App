import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "@material-tailwind/react/Image";
import ProfilePicture from "assets/img/team-1-800x800.jpg";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  return (
    <nav className="bg-white md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <Icon name="menu" size="2xl" color="black" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <Icon name="close" size="2xl" color="black" />
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center w-full px-6">
          <div className="flex">
            <div className="flex px-4 items-center text-xl text-gray-500">
              Hallo, &nbsp;{" "}
              <span className="text-tosca-100 text-xl">Gadjian User</span>
            </div>
            <div className="w-12">
              <Image src={ProfilePicture} rounded />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
