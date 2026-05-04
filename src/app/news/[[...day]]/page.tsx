const NewsPage = async (props : PageProps<"/news/[[...day]]">) => {
  const params = await props.params;


    if (params.day) {
        return <div>NewsPage {params.day.join("/")}</div>;
    }

    return <div>No news found</div>;

};

export default NewsPage;