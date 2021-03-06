import React, {useEffect} from 'react';
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../store/actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomePage = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    if (loading) return <Loader/>

    if (error) return <Message variant='danger'>{error}</Message>

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => {
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                })}
            </Row>
        </>
    );
};

export default HomePage;