import React from 'react';
import { Dropdown, Menu } from "semantic-ui-react";


export default function CategoriasPesquisa() {
    return (
        <html>
            <head style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around' }}>


                <div class="ui secondary menu">
                    <div class="right menu">
                        <div class="item">
                            <div class="ui icon input">
                                <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search icon"></i></div></div><a class="item"></a></div></div>



                <Menu vertical style={{ marginTop: '-1px' }}>
                    <Dropdown>
                        <Dropdown.Menu>
                            <Dropdown.Item>Buffet</Dropdown.Item>
                            <Dropdown.Item>Ornamentação</Dropdown.Item>
                            <Dropdown.Item>Espaços</Dropdown.Item>
                            <Dropdown.Item>Personalizados</Dropdown.Item>
                            <Dropdown.Item>Fotográfos</Dropdown.Item>
                            <Dropdown.Item>Decoração</Dropdown.Item>
                            <Dropdown.Item>Som e iluminação</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </head>
            <body>

            </body>
        </html>



    )
}
