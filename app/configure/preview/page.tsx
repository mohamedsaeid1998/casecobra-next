import { notFound } from "next/navigation";
import { getConfigurations } from "@/actions/configuration.actions";
import DesignPreview from "./DesignPreview";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!id || typeof id !== "string") {
    return notFound();
  }

  let configuration = await getConfigurations(id);

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview {...{ configuration }} user={user!} />;
};

export default Page;

