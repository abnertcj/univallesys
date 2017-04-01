package br.com.univallesys.models;


import com.ancientprogramming.fixedformat4j.annotation.Align;
import com.ancientprogramming.fixedformat4j.annotation.Field;
import com.ancientprogramming.fixedformat4j.annotation.FixedFormatPattern;
import com.ancientprogramming.fixedformat4j.annotation.Record;

import javax.persistence.Entity;
import java.util.Date;

@Record
@Entity
public class Produto {

    private String nome;
    private String codigo;
    private double preco;
    private Date data;

    @Field(offset = 1, length = 20)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Field(offset = 1, length = 10)
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    @Field(offset = 11, length = 8, align = Align.RIGHT, paddingChar = '0')
    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    @Field(offset = 16, length = 10)
    @FixedFormatPattern("yyyyMMdd")
    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

	@Override
	public String toString() {
		return "Produto [" + (nome != null ? "nome=" + nome + ", " : "")
				+ (codigo != null ? "codigo=" + codigo + ", " : "") + "preco=" + preco + ", "
				+ (data != null ? "data=" + data : "") + "]";
	}
	
}
