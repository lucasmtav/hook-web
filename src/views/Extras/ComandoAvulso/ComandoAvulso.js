import React, { Component } from 'react';

class ComandoAvulso extends Component {
	render() {
		return (
			<div className="animated fadeIn">
	      <div className="row justify-content-center">
	        <div className="col-sm-6">
	          <div className="card">
	            <div className="card-header">
	              <strong>Executar commandos SSH</strong> <small>Avulso</small>
	            </div>
	            <div className="card-block">
	              
	              <div className="form-group">
	                <label className="col-md-3 form-control-label" htmlFor="textarea-input">Comandos</label>
	                <div className="col-sm-12">
	                  <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Insira os commandos SSH aqui.."></textarea>
	                </div>
	              </div>

	            </div>

	            <div className="card-footer">
	              <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Executar</button>
	            </div>

	          </div>

	        </div>
	      </div>
	    </div>
		)
	}
}

export default ComandoAvulso;