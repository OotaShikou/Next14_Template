"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === "loading") return; // Do nothing while loading
      if (!session) window.location.href = "/"; // Redirect if not authenticated
    }, [session, status]);

    return session ? <WrappedComponent {...props} /> : <p>loading</p>;
  };
};

export default withAuth;
