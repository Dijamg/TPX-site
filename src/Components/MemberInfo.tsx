import React from 'react'
import { Modal, Button, ListGroup, Tab, Row, Col } from 'react-bootstrap'
import { Member, LoL, TFT, Runeterra, Operators } from '../Assets/data'
import GameInfo from './GameInfo'

const getGamesOfMember = (member: Member, operators: Operators):(LoL|TFT|Runeterra)[] => (operators.gameInfos.filter(gameinfo => gameinfo.playerId === member.id))

const MemberInfo = ({ member, show, operators, handleClose  }: { member: Member, show: boolean, operators: Operators, handleClose: () => void }) => {

    const close = () => handleClose()

    const output = () => {
            return(<Tab.Container>
                        <Row>
                            <Col sm={9}>
                                <Tab.Content>
                                        {getGamesOfMember(member, operators).map(currentGame => (
                                            <Tab.Pane key={currentGame.id} eventKey={`#${currentGame.id}`}>
                                                <GameInfo key={currentGame.id} game={currentGame} member={member} />
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                            </Col>
                            <Col sm={3}>
                                <ListGroup>
                                    {getGamesOfMember(member, operators).map(currentGame => (
                                        <ListGroup.Item className='gameIcon' key={currentGame.id} action href={`#${currentGame.id}`}>
                                            <img alt='gameicon' src={currentGame.gameIconUrl} width='100' height='100'/>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Tab.Container>)
    }

    return(
        <Modal
            dialogClassName={"CSRModal"}
            show={show}
            onHide={() => handleClose()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>{member.name}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {output()}
                </Modal.Body>       
                <Modal.Footer className="FormFooter">
                        <Button variant="secondary" onClick={ () => close() }>Close</Button>
                </Modal.Footer>
        </Modal>
    )
}

export default MemberInfo