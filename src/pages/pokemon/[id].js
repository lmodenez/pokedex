export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id: id,
    },
  };
}

export default function Pokemon(props) {
  return <img src={`/images/${props.id}.png`} />;
}
