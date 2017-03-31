package br.com.univallesys.models;

import java.util.Date;

import javax.persistence.Entity;

import com.ancientprogramming.fixedformat4j.annotation.Align;
import com.ancientprogramming.fixedformat4j.annotation.Field;
import com.ancientprogramming.fixedformat4j.annotation.FixedFormatPattern;

@Entity
public class Produto {

	// @Id
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	// private Integer id;

	private String nome;
	private Integer codigo;
	private Double preco;
	private Date dataCompra;

	@Field(offset = 1, length = 20)
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Field(offset = 1, length = 10)
	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	// @Field(offset = 11, length = 8)
	@Field(offset = 11, length = 8, align = Align.RIGHT, paddingChar = '0')
	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	@Field(offset = 16, length = 10)
	@FixedFormatPattern("yyyyMMdd")
	public Date getDataCompra() {
		return dataCompra;
	}

	public void setDataCompra(Date dataCompra) {
		this.dataCompra = dataCompra;
	}
}
