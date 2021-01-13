import React from 'react';
import {db} from './Firebase'; // 追加class App extends Component {// コンストラクタを追加

class Sample extends React.Component {// コンストラクタを追加
    constructor(props) {
        super(props);
        var docRef = db.collection('users').doc('NagiNo');
        var setAda = docRef.set({
            first: 'Nomiya',
            last: 'Nagi',
            born: 2020
        });
        }
    render() {
        return (
        <div className="Sample">
        </div>
        );
    }
}
export default Sample;