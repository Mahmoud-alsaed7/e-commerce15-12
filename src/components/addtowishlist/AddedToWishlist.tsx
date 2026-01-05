import { addtowishlistactons } from "@/app/(Pages)/products/_server/addtowishlist.actons";
import { HeartIcon, Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { wishlistcontext } from "../WishListContext/wishlistcontext";
export default function AddedToWishlist({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  const { wishlistdata, getwishlist ,removeing} = useContext(wishlistcontext);
  const session = useSession();
  const router = useRouter();
  const inWishlist = useMemo(() => {
    return wishlistdata?.data?.some((item: any) => item._id === productId);
  }, [wishlistdata, productId]);
  async function toggleWishlist(){
    if (session.status !== "authenticated") {
      return router.push("/login");
    }
    setLoading(true);
    try {
      if (inWishlist) {
        const res = await removeing(productId);
        res.status === "success" && toast.success("Removed from wishlist");
      }
      else {
        const res = await addtowishlistactons(productId);
        res.status === "success" && toast.success("Added to wishlist");
      }
      await getwishlist();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {loading ? (
        <Loader className="animate-spin" />
      ) : (
        <HeartIcon
          onClick={toggleWishlist}
          className={`cursor-pointer transition
            ${inWishlist ? "fill-black text-black" : "text-gray-700"}
          `}
        />
      )}
    </>
  );
}

