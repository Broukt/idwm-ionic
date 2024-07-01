/**
 * Represents a purchase made by a user.
 */
export interface Purchase {
  /**
   * The unique identifier of the purchase.
   */
  id: number;

  /**
   * The date when the purchase was made.
   */
  purchase_Date: Date;

  /**
   * The identifier of the product associated with the purchase.
   */
  productId: number;

  /**
   * The name of the product associated with the purchase.
   */
  productName: string;

  /**
   * The type of the product associated with the purchase.
   */
  productType: string;

  /**
   * The price of the product associated with the purchase.
   */
  productPrice: number;

  /**
   * The quantity of the product purchased.
   */
  quantity: number;

  /**
   * The total price of the purchase.
   */
  totalPrice: number;
}
