<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortLinkStore;
use App\Models\ShortLink;
use Illuminate\Http\Request;

class ShortLinkController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $links = ShortLink::get();
            return response()->json(['links' => $links]);
        } catch (\Exception $ex) {
            return response()->json([$ex->getMessage()], 500);

        }

    }

    /**
     * @param $shortLink
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($shortLink)
    {
        try {
        $link=ShortLink::where('short_link', '=', $shortLink)
            ->first();
        return response()->json(['link' => $link]);
        } catch (\Exception $ex) {
            return response()->json([$ex->getMessage()], 500);

        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ShortLinkStore $request)
    {
        try {
            $shortLink = new ShortLink();
            $shortLink->link = $request->link;
            $shortLink->short_link = $this->createSlug($this->generateRandomString(5));
            $shortLink->save();
            return response()->json(['link' => $shortLink]);
        } catch (\Exception $ex) {
            echo response()->json([$ex->getMessage()], 500);

        }

    }

    /**
     * @param $title
     * @param int $id
     * @return string
     */
    public function createSlug($title, $id = 0)
    {
        $slug = str_slug($title);
        $allSlugs = $this->getRelatedSlugs($slug, $id);
        if (!$allSlugs->contains('slug', $slug)) {
            return $slug;
        }

        $i = 1;
        $is_contain = true;
        do {
            $newSlug = $slug . '-' . $i;
            if (!$allSlugs->contains('slug', $newSlug)) {
                $is_contain = false;
                return $newSlug;
            }
            $i++;
        } while ($is_contain);
    }

    /**
     * @param $slug
     * @param int $id
     * @return mixed
     */
    protected function getRelatedSlugs($short_url, $id = 0)
    {
        return ShortLink::select('short_link')->where('short_link', 'like', $short_url . '%')
            ->where('id', '<>', $id)
            ->get();
    }

    /**
     * @param int $length
     * @return string
     */
    function generateRandomString($length = 6)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }


}
