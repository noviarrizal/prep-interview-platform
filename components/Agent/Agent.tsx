"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Agent = () => {
  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            <span className="animate-speak"></span>
          </div>
          <h3>AI Interview</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>Name</h3>
          </div>
        </div>
      </div>
      <div className="transcript-border">
        <div className="transcript">
          <p
            key={""}
            className={cn(
              "transition-opacity duration-500 opacity-0",
              "animate-fadeIn opacity-100"
            )}
          >
            last Massage
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="relative btn-call" onClick={() => {}}>
          <span
            className={cn("absolute animate-ping rounded-full opacity-75")}
          />
          <span className="relative">Finished</span>
        </button>
      </div>
    </>
  );
};

export default Agent;
