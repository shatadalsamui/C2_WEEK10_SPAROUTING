import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/neet/online-coaching-class-11">Class 11</Link> |
                <Link to="/neet/online-coaching-class-12">Class 12</Link> |
                <Link to="/">Allen</Link>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/neet/online-coaching-class-11" element={<Class11Programs />} />
                        <Route path="/neet/online-coaching-class-12" element={<Class12Programs />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/" element={<Landing />} /> {/* Add this line */}
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Layout() {
    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <div style={{ height: "90vh" }}>
                <Outlet />
            </div>
            Footer
        </div>
    );
}

function Header() {
    return <div>Header Content</div>;
}

function ErrorPage() {
    return <div>Sorry, page not found</div>;
}

function Landing() {
    return <div>Welcome to allen</div>;
}

function Class11Programs() {
    return <div>NEET programs for class 11th</div>;
}

function Class12Programs() {
    const navigate = useNavigate();

    function redirectUser() {
        navigate("/");
    }

    return (
        <div>
            NEET programs for class 12th
            <button onClick={redirectUser}>Go back to landing page</button>
        </div>
    );
}

export default App;