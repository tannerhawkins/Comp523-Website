var __html = require('../cypress-coverage/lcov-report/index.html');
var template = { __html: __html };

const Coverage = () => {


    return <div dangerouslySetInnerHTML={template}></div>
        
}

export default Coverage;