function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
