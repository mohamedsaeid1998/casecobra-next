import { notFound } from "next/navigation";
import { getConfigurations } from "../../../actions/configuration.actions";
import DesignConfigurator from "./DesignConfigurator";

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

  const { imageUrl, width, height } = configuration;
  return (
    <>
      <DesignConfigurator
        configId={configuration.id}
        imageDimensions={{ width, height }}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default Page;
