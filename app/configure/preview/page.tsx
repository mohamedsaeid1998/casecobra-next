import { notFound } from "next/navigation";
import { getConfigurations } from "@/actions/configuration.actions";
import DesignPreview from "./DesignPreview";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  let configuration = await getConfigurations(id);

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview {...{ configuration }} />;
};

export default Page;
