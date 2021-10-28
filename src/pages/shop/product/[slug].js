import { useRouter } from "next/router";

// import products from "../../../data/products.json";
import { getProductBySlug } from "../../../common/productSelect";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import InstagramTwo from "../../../components/Sections/Instagram/InstagramTwo";
import LayoutFour from "../../../components/Layout/LayoutFour";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../components/Other/Breadcrumb";
import ProductSlideTwo from "../../../components/Sections/ProductThumb/ProductSlide/ProductSlideTwo";

function SlugPage({products}) {
  const router = useRouter();
  const { slug } = router.query;
  let foundProduct = getSpecificPost(products, slug);


  const onReviewSubmit = (data) => {
    console.log(data);
  };

  console.log(getSpecificPost(products, slug))

  console.log(products)
  return (
    true && (
      <LayoutFour title={foundProduct.name}>
        <Breadcrumb title={foundProduct.name}>
          <BreadcrumbItem name="Home" />
          <BreadcrumbItem name="Shop" />
          <BreadcrumbItem name={foundProduct.name} current />
        </Breadcrumb>
        <ProductDetail data={foundProduct} onReviewSubmit={onReviewSubmit} />
        <ProductSlideTwo data={products} />
        <InstagramTwo />
      </LayoutFour>
    ))
}



export async function getStaticProps() {
  const res = await fetch('https://food-admin.wangnelson.xyz/public/api/products')
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

function getSpecificPost(products, slug){
    // const allPosts = getAllPosts();
  
    const getSpecificproductItem = products.find(productItem => productItem.code === slug );
  
    return getSpecificproductItem;
}


export async function getStaticPaths() {

  // const postFilenames = getPostsFiles();

  const res = await fetch('https://food-admin.wangnelson.xyz/public/api/products')
  const products = await res.json()
  // console.log(products);
  const slugs = products.map(x => {
    return x.code;
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SlugPage