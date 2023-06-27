import Container from "@/components/Container";
import InspirationItem from "@/components/InspirationItem";
import InspirationItemProps from "@/types/InspirationItemProps";

// fetch inspiration items from api
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

// inspiration page
const InspirationPage = async () => {
  const inspirationItems = await getInspirationItems();

  return (
    <section className="mx-auto mb-4 mt-2 md:max-w-[133vh]">
      <Container>
        <div className="flex flex-col gap-4">
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
        </div>
      </Container>
    </section>
  );
};

export default InspirationPage;
