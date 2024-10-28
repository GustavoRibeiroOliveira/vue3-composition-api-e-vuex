<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
                <div class="column is-3">
                    <div class="select">
                        <select v-model="idProjeto">
                            <option value="">Selecione o projeto</option>
                            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                                {{ projeto.nome }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="column">
                    <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from '@/store';
import { notificacaoMixin } from '@/mixins/notificar';

export default defineComponent({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    components: { Temporizador },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    mixins: [notificacaoMixin],
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            const projeto = this.projetos.find((p) => p.id == this.idProjeto);
            // if(!projeto) {
            //     this.notificar(TipoDeNotificacao.FALHA, 'Ops!', 'Selecione um projeto antes de finalizar a tarefa!')
            //     return;
            // }
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: projeto
            })
            this.descricao = ''
        }
    },
    setup() {
        const store = useStore();
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>