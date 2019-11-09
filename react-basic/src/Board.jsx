import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(title, content, reg_date) {
    return { title, content, reg_date };
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                createData('나는 18살이다.', '나는 18살이다. 모든 것을 파.괴.한.다.', '2019-10-30T16:14:23.000Z'),
                createData('행운의 편지', '이 글은 영국에서부터 시작되었으며...', '2019-10-30T16:16:14.000Z')
            ]
        };
    }

    /********* Lifecycle ********/
    //Lifecycle method : componentDidMount()
    componentDidMount() {
        
    }

    //Lifecycle method : componentWillMount()
    componentWillMount() {
        
    }


    /********* methods **********/
    insertData() {
        const eleTitle = document.querySelector('#title');
        const eleContent = document.querySelector('#content');
        const date = new Date().toLocaleDateString() + new Date().toLocaleTimeString();

        this.state.rows.push( createData( eleTitle.value, eleContent.value, date ) );
        this.forceUpdate();
    }
    
    deleteData(idx) {
        this.state.rows.splice(idx, 1);
        this.forceUpdate();
    }

    /********* render **********/
    render() {
        return (
            <div>
                <div>
                    Title: <input id='title' name='title' />
                    Content: <input id='content' name='content' />
                    <button onClick={(e) => this.insertData(e)}>추가</button>
                </div>
                <Paper>
                    <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Content</TableCell>
                            <TableCell align="right">Regist Date</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row, idx, arr) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">{row.title}</TableCell>
                            <TableCell align="right">{row.content}</TableCell>
                            <TableCell align="right">{row.reg_date}</TableCell>
                            <TableCell align="right">
                                <button onClick={(e) => this.deleteData(idx)}>삭제</button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default Board;