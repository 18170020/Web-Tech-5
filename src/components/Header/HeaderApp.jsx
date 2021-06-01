class HeaderApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <header className="header container sticky-top bg-primary text-white">
                   <HeaderDesc/>
                   <Nav handleClick={this.props.handleClick} modal={this.props.modal}/>
                </header>
            );
        }
    }
}

class HeaderDesc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }    
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="container-sm">
                    <div className="row align-items-center">
                        <HeaderData headerData={"Шайдуллина Диана ПИ-319"}/>
                        <HeaderData headerData={"Лабораторная работа №5"}/>
                        <HeaderData headerData={"Поиск наибольшего значения в массивепроизвольной длинны"}/>
                    </div>
                </div>
            );
        }
    }
}

class HeaderData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            headerData: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            headerData: this.props.headerData
        });
    }    
    
    render(){
        const{error, isLoaded, headerData} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="col-sm align-self-center">
                    <h1 className="text-center user-select-none fs-5">
                        {headerData}
                    </h1>
                </div>
            );
        }
    }
}