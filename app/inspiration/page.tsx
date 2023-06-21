import Container from "@/components/Container";
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
  // const inspirationItems = await getInspirationItems();

  return (
    <section className="mb-4">
      <Container>
        <div className="mt-2 flex w-full flex-col gap-2">
          {/* {inspirationItems?.map(
            (inspirationItem: InspirationItemProps, index: number) => (
              <InspirationItem
                key={index}
                description={inspirationItem.description}
                image={inspirationItem.image}
                slug={inspirationItem.slug}
                title={inspirationItem.title}
                url={inspirationItem.url}
              />
            )
          )} */}
        </div>
      </Container>
    </section>
  );
};

export default InspirationPage;
