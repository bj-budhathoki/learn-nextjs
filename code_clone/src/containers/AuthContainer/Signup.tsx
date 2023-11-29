"use client";
import React from "react";
import { useSetRecoilState } from "recoil";
import { Modal } from "@/components";
import { modalState } from "@/atoms/modalAtoms";
type SignUpContainerProps = {};
export const SignUpContainer: React.FC<SignUpContainerProps> = () => {
  const setModalState = useSetRecoilState(modalState);
  return (
    <Modal>
      <form className="px-6 pb-4 space-y-6">
        <h3 className="text-xl font-medium text-white">Register to devCode</h3>
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
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Display name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="John Doe"
            className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          />
        </div>
        <button className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
          Register
        </button>

        <div className="text-sm font-medium text-gray-300">
          Already have an account?{" "}
          <button
            className="text-blue-700 hover:underline"
            onClick={() =>
              setModalState((prev) => ({
                ...prev,
                type: "login",
              }))
            }
          >
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};
