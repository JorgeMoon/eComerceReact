import React, { useState} from "react";
import {Button,Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo} from '@fortawesome/free-solid-svg-icons'


export const ItemDetail = (props) =>{

        const [lgShow, setLgShow] = useState(false);

        //armo el modal con datos
    
    


        return (
          <div className="mb-2">
            <Button onClick={() => setLgShow(true)}>
                <FontAwesomeIcon icon={faInfo} />
            </Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis consequuntur ad perspiciatis quos est?
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis consequuntur ad perspiciatis quos est?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis consequuntur ad perspiciatis quos est?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis consequuntur ad perspiciatis quos est?
              </Modal.Body>
            </Modal>
          </div>
        );
}


