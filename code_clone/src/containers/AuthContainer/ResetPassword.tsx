import { Modal } from "@/components";
import React from "react";
type ResetPasswordProps = {};
export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <Modal>
      <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <h3 className="text-xl font-medium text-white">Reset Password</h3>
        <p className="text-white tet-sm">
          Forgotten your password? Enter your e-mail address below, and
          we&apos;ll send you e-mail to reset it.
        </p>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          />
        </div>

        <button className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
          Reset password
        </button>
      </form>
    </Modal>
  );
};
