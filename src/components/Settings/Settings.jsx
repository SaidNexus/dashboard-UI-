import { Edit } from "lucide-react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Settings() {
  return (
    <>
      <div className=" p-6 space-y-10 ">
        <div className="bg-white/50 dark:bg-slate-900/80 rounded-xl min-w-full shadow px-16 pt-10 pb-8">
          <h1 className="dark:text-white text-2xl font-semibold text-slate-700">
            Profile Settings
          </h1>

          <div className="flex xl:space-x-10 space-x-5 items-center mt-8">
            <div>
              <img
                className="xl:max-w-28 max-w-20 rounded-full"
                src="https://res.cloudinary.com/dkgnssc6l/image/upload/v1762644466/IMG_20240702_205648_157_g1cyju.jpg"
                alt="Profileimg"
              />
            </div>

            <div className="space-y-2">
              <button className="bg-blue-500 hover:cursor-pointer tracking-wider hover:bg-blue-600 transition-all hover:shadow-xl xl:p-3 p-1.5 rounded text-slate-100 text-nowrap">
                Upload new picture
              </button>
              <p className="text-sm text-slate-500 xl:ml-2 ml-1 text-nowrap">
                PNG, JPG, GIF up to 10MP
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 flex xl:space-x-6 md:space-x-4 sm:space-x-0  flex-wrap">
            <div className="xl:space-y-2 flex-1">
              <p className="dark:text-white ml-1">Full Name</p>
              <div className="relative ">
                <input
                  type="text"
                  value={"Said Ahmed"}
                  className="border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800
                  pr-6 pl-2 py-3 min-w-full rounded-xl focus:ring-2 focus:ring-blue-600 focus:outline-none dark:text-white  "
                />
                <Edit className="absolute top-3 right-2 text-slate-600 hover:text-slate-900 hover:cursor-pointer dark:hover:text-slate-100 " />
              </div>
            </div>

            <div className="xl:space-y-2 flex-1 mt-4.5 xl:mt-0 md:mt-0 ">
              <p className="dark:text-white ml-1">Email Address</p>
              <div className="relative">
                <input
                  type="text"
                  value={"saed.ahmed.ai96@gmail.com"}
                  className="border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800
                   pr-6  pl-2 py-3 min-w-full  rounded-xl  focus:ring-2 focus:ring-blue-600 focus:outline-none dark:text-white  "
                />
                <Edit className="absolute top-3 right-2 text-slate-600 hover:text-slate-900 hover:cursor-pointer dark:hover:text-slate-100" />
              </div>
            </div>
          </div>
        </div>



        <div className="bg-white/50 dark:bg-slate-900/80 rounded-xl w-full shadow px-6 sm:px-10 md:px-16 pt-8 pb-6 space-y-6">
          <h1 className="text-slate-700 text-2xl font-semibold dark:text-white">
            Notifications
          </h1>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
            <div>
              <p className="text-slate-700 text-lg sm:text-xl dark:text-white">
                Email Notifications
              </p>
              <p className="text-slate-500 text-sm sm:text-base">
                Receive notifications via email
              </p>
            </div>
            <FormControlLabel control={<Switch defaultChecked />} />
          </div>

          {/* System */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
            <div>
              <p className="text-slate-700 text-lg sm:text-xl dark:text-white">
                System Notifications
              </p>
              <p className="text-slate-500 text-sm sm:text-base">
                Get updates about system changes
              </p>
            </div>
            <FormControlLabel control={<Switch defaultChecked />} />
          </div>

          {/* Marketing */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
            <div>
              <p className="text-slate-700 text-lg sm:text-xl dark:text-white">
                Marketing Notifications
              </p>
              <p className="text-slate-500 text-sm sm:text-base">
                Stay informed about new products offers
              </p>
            </div>
            <FormControlLabel control={<Switch defaultChecked />} />
          </div>
        </div>
      </div>
    </>
  );
}
