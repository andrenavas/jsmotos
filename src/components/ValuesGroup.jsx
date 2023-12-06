import "./ValuesGroup.css";
const ValuesGroup = () => {
    return (
        <div className="container-values container">
            <div className="values">
                <i className="bx bx-check-shield"></i>
                <p className="text-icon-home">RESPONSABILIDAD <span className="span-icon-home">Con nuestros clientes.</span></p>
            </div>

            <div className="values">
                <i className="bx bx-medal"></i>
                <p className="text-icon-home">CALIDAD <span className="span-icon-home">En todos nuestros productos</span></p>
            </div>
            <div className="values">
                <i className="bx bx-like"></i>
                <p className="text-icon-home">EFICIENCIA <span className="span-icon-home">En todos nuestros servicios</span>.</p>
            </div>
        </div>
    );
};

export default ValuesGroup;
