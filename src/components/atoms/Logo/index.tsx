import Image from "next/image";

export const Logo = (): JSX.Element => {
  return <Image src='/logo.svg' alt='Logo Icon' width={250} height={250} />;
};
