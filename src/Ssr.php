<?php

namespace ProtoneMedia\Splade;

use Illuminate\Support\Facades\Http;

class Ssr
{
    public function render(string $components, string $html, array $dynamics, object $splade): array
    {
        $default = ['body' => null];

        $data = [
            'components' => $components,
            'html'       => $html,
            'dynamics'   => $dynamics,
            'splade'     => $splade,
        ];

        return rescue(
            callback: fn () => Http::post(config('splade.ssr.server'), $data)->throw()->json(),
            rescue: $default,
            report: false
        ) ?: $default;
    }
}
