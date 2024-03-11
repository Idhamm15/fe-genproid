import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProductData } from '../../config/action';

function Table ({ products, dispatch }) {

  const [dataProduct, SetDataProduct] = ([])
    useEffect(() => {
        // Pemanggilan action creator untuk mengambil data produk
        dispatch(fetchProductData());
    }, [dispatch]);

    console.log(products); // Memindahkan log ke luar tabel untuk memastikan data tersedia

    // const products = useSelector(state => state.product);

    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Deskripsi</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {products.map((product) => (
                        <tr key={product}>
                            <td>{product + 1}</td>
                            <td>{product.nama_product}</td>
                            <td>{product.deskripsi}</td>
                        </tr>
                    ))} */}
                  {products ? (
                      <ul>
                        {products.map(product => (
                          <li key={product.id}>
                            ID: {product.id},
                            Name: {product.nama_product}, 
                            Price: {product.deskripsi}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Loading...</p>
                    )}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.product // Pastikan nama reducer sesuai dengan yang Anda gunakan di rootReducer
});

export default connect(mapStateToProps)(Table);
