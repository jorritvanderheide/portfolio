import InspirationItem from "@/components/InspirationItem";
import InspirationItemProps from "@/types/InspirationItemProps";

const getInspirationItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/inspiration`
  );

  if (!response.ok) {
    throw new Error(`Server responded with status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

const InspirationPage = async () => {
  const inspirationItems = await getInspirationItems();

  return (
    <section className="mx-auto h-[100svh] w-screen max-w-[80%] snap-y snap-mandatory justify-center overflow-y-scroll pt-[calc(50vh_-_7.5em)] md:pt-[calc(50vh_-_5em)]">
      {inspirationItems?.map(
        (inspirationItem: InspirationItemProps, index: number) => (
          <InspirationItem
            key={index}
            description={inspirationItem.description}
            title={inspirationItem.title}
            url={inspirationItem.url}
          />
        )
      )}
    </section>
  );
};

export default InspirationPage;
