import { observable } from 'mobx'
import Axios from 'axios'


export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

interface ProductMobx {
  items: CartItemType[]
  isLoading: boolean
  error:boolean
  getProducts:() => void
}

export const productStore = observable<ProductMobx>({
  items: [],
  isLoading:true,
  error:false,
  async getProducts () {
    try {
      const res = await Axios.get(`https://fakestoreapi.herokuapp.com/products`)
      const data = res.data
      this.items = data
      this.isLoading = false
      return data
    } catch (err) {
      this.error = true
      console.log('error')
    }    
  },
})

// export class ProductStore<ProductMobx> {
//   @observable
//   public items: CartItemType[] = [];

//   @action
//   public getProducts = async (): Promise<any> => {
//     try {
//       const res = await Axios.get(`https://fakestoreapi.herokuapp.com/products`)
//       const data = res.data
//       console.log(data)
//       this.items.push(data)
//    } catch (err) {
//       console.log('error')
//    }    
//   }
//   handleAddToCart() {

//   }
// }